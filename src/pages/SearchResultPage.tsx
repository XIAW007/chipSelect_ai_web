import { Sparkles } from 'lucide-react'
import type { FormEvent } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AiConversationResults } from '../components/mall-search/AiConversationResults'
import type { AiMessage } from '../components/mall-search/AiConversationResults'
import { NormalSearchResults } from '../components/mall-search/NormalSearchResults'
import { mallProducts, relatedKeywords } from '../components/mall-search/data'

export function SearchResultPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') || '10uF 10V X5R 0603'
  const initialMode = searchParams.get('mode') === 'ai' ? 'ai' : 'normal'
  const [keyword, setKeyword] = useState(query)
  const [searchMode, setSearchMode] = useState<'normal' | 'ai'>(initialMode)
  const [messages, setMessages] = useState<AiMessage[]>([])
  const [pendingReply, setPendingReply] = useState('')
  const [streamingText, setStreamingText] = useState('')
  const shownProducts = useMemo(() => mallProducts, [])

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextKeyword = keyword.trim() || query
    navigate(`/search?q=${encodeURIComponent(nextKeyword)}&mode=${searchMode}`)
    if (searchMode === 'ai') {
      sendAiMessage(nextKeyword)
    }
  }

  function toggleSearchMode() {
    const nextMode = searchMode === 'ai' ? 'normal' : 'ai'
    const nextKeyword = keyword.trim() || query
    setSearchMode(nextMode)
    navigate(`/search?q=${encodeURIComponent(nextKeyword)}&mode=${nextMode}`)
  }

  function selectKeyword(nextKeyword: string) {
    setKeyword(nextKeyword)
    navigate(`/search?q=${encodeURIComponent(nextKeyword)}&mode=${searchMode}`)
    if (searchMode === 'ai') {
      sendAiMessage(nextKeyword)
    }
  }

  function sendAiMessage(content: string) {
    const question = content.trim()
    if (!question) return

    const userMessage: AiMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: question,
    }

    setMessages((current) => [...current, userMessage])
    setPendingReply(buildAiReply(question))
  }

  useEffect(() => {
    if (searchMode !== 'ai' || messages.length > 0 || pendingReply || streamingText) return
    setPendingReply(buildAiReply(keyword.trim() || query))
  }, [keyword, messages.length, pendingReply, query, searchMode, streamingText])

  useEffect(() => {
    if (!pendingReply) return

    let index = 0
    const fullText = pendingReply
    setPendingReply('')
    setStreamingText('')

    const timer = window.setInterval(() => {
      index += 4
      const nextText = fullText.slice(0, index)
      setStreamingText(nextText)

      if (index >= fullText.length) {
        window.clearInterval(timer)
        setMessages((current) => [
          ...current,
          {
            id: `${Date.now()}-assistant`,
            role: 'assistant',
            content: fullText,
          },
        ])
        setStreamingText('')
      }
    }, 28)

    return () => window.clearInterval(timer)
  }, [pendingReply])

  return (
    <div className="space-y-4">
      <section className="px-4 py-1">
        <div className="mx-auto w-fit">
          <div className="flex items-center gap-3">
            <Link className="flex h-12 w-[178px] items-center gap-2.5" to="/">
              <div className="relative h-10 w-10">
                <span className="absolute left-0 top-[17px] h-5 w-10 rotate-[-58deg] rounded-full bg-[#2563EB]" />
                <span className="absolute left-[15px] top-1 h-5 w-10 rotate-[58deg] rounded-full bg-[#60A5FA]" />
                <span className="absolute left-[16px] top-[20px] h-3.5 w-3.5 rounded-full bg-[#1D4ED8]" />
              </div>
              <span className="text-[30px] font-bold tracking-normal text-[#111827]">AI检索</span>
            </Link>

            <form className="flex h-12 w-[760px] overflow-hidden rounded-lg border-2 border-[#2563EB] bg-white shadow-[0_10px_24px_rgba(37,99,235,0.1)]" onSubmit={handleSearch}>
              <input
                className="h-full min-w-0 flex-1 px-5 text-sm outline-none placeholder:text-[#94A3B8]"
                onChange={(event) => setKeyword(event.target.value)}
                type="search"
                value={keyword}
              />
              <div className="flex items-center gap-3 border-l border-[#E5E7EB] px-4">
                <span
                  className={[
                    'inline-flex items-center gap-1 text-sm font-bold',
                    searchMode === 'ai' ? 'text-[#2563EB]' : 'text-[#64748B]',
                  ].join(' ')}
                >
                  <Sparkles size={16} aria-hidden="true" />
                  {searchMode === 'ai' ? 'AI 搜索' : '普通搜索'}
                </span>
                <button
                  aria-label={searchMode === 'ai' ? '切换到普通搜索' : '切换到 AI 搜索'}
                  aria-pressed={searchMode === 'ai'}
                  className={[
                    'h-4 w-8 rounded-full p-0.5 transition',
                    searchMode === 'ai' ? 'bg-[#2563EB]' : 'bg-[#D1D5DB]',
                  ].join(' ')}
                  onClick={toggleSearchMode}
                  type="button"
                >
                  <span
                    className={[
                      'block size-3 rounded-full bg-white transition',
                      searchMode === 'ai' ? 'translate-x-4' : 'translate-x-0',
                    ].join(' ')}
                  />
                </button>
              </div>
              <button className="w-[96px] bg-[#2563EB] text-base font-bold text-white transition hover:bg-[#1D4ED8]" type="submit">
                搜索
              </button>
            </form>
          </div>

          <div className="ml-[190px] mt-2 flex w-[760px] items-center gap-4 overflow-hidden text-sm text-[#64748B]">
            {relatedKeywords.map((item) => (
              <button className="shrink-0 hover:text-[#2563EB]" key={item} onClick={() => selectKeyword(item)} type="button">
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {searchMode === 'ai' ? (
        <AiConversationResults messages={messages} onSend={sendAiMessage} streamingText={streamingText} />
      ) : (
        <NormalSearchResults products={shownProducts} />
      )}
    </div>
  )
}

function buildAiReply(keyword: string) {
  return `我先按「${keyword}」理解你的需求：这是一个偏常用采购/选型场景，可以从封装、耐压、介质、库存和替代料几个维度筛选。

建议优先确认：
1. 工作电压是否需要留 2 倍以上余量。
2. 是否限定原厂品牌，还是接受国产替代。
3. 是否以现货交付优先，还是以单价优先。

如果你告诉我应用场景、目标数量和是否需要国产替代，我可以继续缩小候选型号。`
}
