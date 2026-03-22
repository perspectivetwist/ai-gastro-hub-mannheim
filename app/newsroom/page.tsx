import fs from 'fs'
import path from 'path'
import Link from 'next/link'

type Article = { slug: string; kw: number; year: number; date: string; headline: string; monthLabel?: string }

const MONTH_INDEX: Record<string, string> = {
  'Januar': '01', 'Februar': '02', 'März': '03', 'April': '04',
  'Mai': '05', 'Juni': '06', 'Juli': '07', 'August': '08',
  'September': '09', 'Oktober': '10', 'November': '11', 'Dezember': '12'
}

function groupByMonth(articles: Article[]) {
  const groups: Record<string, Article[]> = {}
  articles.forEach(article => {
    const parts = article.date.split(' ')
    const monthNum = MONTH_INDEX[parts[1]] || '00'
    const key = `${parts[2]}-${monthNum}`
    const label = `${parts[1]} ${parts[2]}`
    if (!groups[key]) groups[key] = []
    groups[key].push({ ...article, monthLabel: label })
  })
  return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]))
}

export default function NewsroomOverview() {
  let articles: Article[] = []
  try {
    const dir = path.join(process.cwd(), 'public', 'newsroom')
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
    articles = files
      .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')))
      .sort((a: Article, b: Article) => (b.year * 100 + b.kw) - (a.year * 100 + a.kw))
  } catch {}

  const grouped = groupByMonth(articles)

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-start gap-4 mb-12">
        <img
          src="/newsroom-icon.png"
          alt="KI-Gastro-Newsroom"
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
        />
        <div>
          <h1 className="text-3xl font-bold text-white">KI-Insider für Gastro. Jeden Montag.</h1>
          <p className="text-gray-400 text-base mt-1">
            Wer das nicht liest, erfährt es von der Konkurrenz.
          </p>
        </div>
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-500 text-sm">Erster Beitrag erscheint nächsten Montag.</p>
      ) : (
        grouped.map(([key, monthArticles]) => (
          <div key={key} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest whitespace-nowrap">
                {monthArticles[0].monthLabel}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {monthArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/newsroom/${article.slug}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition group block"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">
                      KW {article.kw} · {article.date}
                    </span>
                  </div>
                  <h2 className="font-bold text-white text-sm leading-snug mb-4 group-hover:text-gray-200 transition">
                    {article.headline}
                  </h2>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition">
                    Lesen →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))
      )}
    </main>
  )
}
