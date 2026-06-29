import { Bot, MessageSquarePlus, Send, UserRound } from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'

export type AiMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

type AiConversationResultsProps = {
  messages: AiMessage[]
  streamingText: string
  onSend: (content: string) => void
}

export function AiConversationResults({ messages, streamingText, onSend }: AiConversationResultsProps) {
  const [draft, setDraft] = useState('')
  const [activeSession, setActiveSession] = useState('current')
  const historyItems = [
    { id: 'current', title: getSessionTitle(messages) || '当前选型会话', desc: '正在生成推荐思路' },
    { id: 'domestic', title: '国产替代筛选', desc: '优先国产品牌和现货' },
    { id: 'stock', title: '10uF 0603 现货', desc: '按库存和交期筛选' },
    { id: 'power', title: '电源芯片选型', desc: '降压芯片和替代料' },
  ]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const content = draft.trim()
    if (!content) return
    onSend(content)
    setDraft('')
  }

  return (
    <section className="grid h-[calc(100vh-190px)] min-h-[520px] grid-cols-[280px_1fr] gap-4">
      <aside className="h-full rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[#111827]">历史会话</h2>
          <button className="grid size-8 place-items-center rounded-md border border-[#E5E7EB] text-[#2563EB] hover:bg-[#EFF6FF]" type="button">
            <MessageSquarePlus size={16} aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4 space-y-2">
          {historyItems.map((item) => (
            <button
              className={[
                'w-full rounded-lg border px-3 py-3 text-left transition',
                item.id === activeSession
                  ? 'border-[#2563EB] bg-[#EFF6FF]'
                  : 'border-[#E5E7EB] bg-white hover:border-[#BFDBFE] hover:bg-[#F8FAFC]',
              ].join(' ')}
              key={item.id}
              onClick={() => setActiveSession(item.id)}
              type="button"
            >
              <span className="block truncate text-sm font-semibold text-[#111827]">{item.title}</span>
              <span className="mt-1 block truncate text-xs text-[#64748B]">{item.desc}</span>
            </button>
          ))}
        </div>
      </aside>

      <div className="flex h-full flex-col rounded-lg bg-white p-5 shadow-sm">
        <div className="border-b border-[#E5E7EB] pb-4">
          <h2 className="text-lg font-bold text-[#111827]">AI 选型会话</h2>
          <p className="mt-1 text-sm text-[#64748B]">描述型号、参数或应用场景，AI 会按多轮对话持续补充推荐思路。</p>
        </div>

        <div className="mt-5 flex-1 space-y-4 overflow-hidden">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {streamingText ? (
            <MessageBubble message={{ id: 'streaming', role: 'assistant', content: streamingText }} isStreaming />
          ) : null}
        </div>

        <form className="mt-5 flex h-12 shrink-0 overflow-hidden rounded-lg border border-[#BFDBFE] bg-white" onSubmit={handleSubmit}>
          <input
            className="h-full min-w-0 flex-1 px-4 text-sm outline-none placeholder:text-[#94A3B8]"
            onChange={(event) => setDraft(event.target.value)}
            placeholder="继续追问，例如：优先国产替代，要求现货"
            type="text"
            value={draft}
          />
          <button className="grid h-full w-14 place-items-center bg-[#2563EB] text-white transition hover:bg-[#1D4ED8]" type="submit">
            <Send size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}

function getSessionTitle(messages: AiMessage[]) {
  return messages.find((message) => message.role === 'user')?.content
}

function MessageBubble({ message, isStreaming = false }: { message: AiMessage; isStreaming?: boolean }) {
  const isAssistant = message.role === 'assistant'

  return (
    <div className={['flex gap-3', isAssistant ? 'justify-start' : 'justify-end'].join(' ')}>
      {isAssistant ? (
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
          <Bot size={18} aria-hidden="true" />
        </span>
      ) : null}
      <div
        className={[
          'max-w-[760px] rounded-lg px-4 py-3 text-sm leading-6 shadow-sm',
          isAssistant ? 'bg-[#F8FAFC] text-[#334155]' : 'bg-[#2563EB] text-white',
        ].join(' ')}
      >
        <p className="whitespace-pre-line">{message.content}</p>
        {isStreaming ? <span className="ml-1 inline-block h-4 w-1 translate-y-0.5 animate-pulse rounded-full bg-[#2563EB]" /> : null}
      </div>
      {!isAssistant ? (
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#E0ECFF] text-[#2563EB]">
          <UserRound size={18} aria-hidden="true" />
        </span>
      ) : null}
    </div>
  )
}
