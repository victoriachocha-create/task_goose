class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <div className="min-h-screen flex items-center justify-center">
        <button onClick={() => window.location.reload()} className="px-6 py-3 rounded-full" style={{backgroundColor: 'var(--primary-color)'}}>Reload</button>
      </div>;
    }
    return this.props.children;
  }
}

function GooseLabPage() {
  try {
    const goosistantRef = React.useRef(null);
    const [selectedArticle, setSelectedArticle] = React.useState(null);

    const articles = [
      {
        id: 1,
        title: 'The New Rhythm of Smart Living: How Technology is Redefining Everyday Life',
        excerpt: 'There\'s something quietly revolutionary happening in the way we live. Homes are becoming smarter, but not in the cold, mechanical sense...',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        content: `There's something quietly revolutionary happening in the way we live. Homes are becoming smarter, but not in the cold, mechanical sense we once imagined. Today's technology hums gently in the background organizing, reminding, supporting, nudging and adapting to the rhythm of our lives.

At TaskGoose, we believe "smart living" isn't about replacing the human touch it's about freeing time for what truly matters. Whether that's more presence with family, space for creativity, or mental clarity, technology should serve you, not the other way around.

Across our research, one truth remains: when daily tasks are simplified through intelligent systems, people thrive. They rest more. They create more. They connect more deeply. That's why our design philosophy in the Goose Lab focuses on intuitive technology one that senses needs before they're spoken, and solves problems seamlessly.

Imagine a world where your home, work, and wellbeing stay in harmony — where stress doesn't control the day, and technology acts as your silent co-pilot. That's the future we're shaping. Not with gadgets alone, but with empathy, and foresight.

✨ Keep an eye open for what's hatching next. Innovation is only just taking flight.`
      },
      {
        id: 2,
        title: 'The Emotional Science of a Well-Managed Home',
        excerpt: 'Let\'s be honest, clutter isn\'t just physical; it\'s emotional. A disorganized space can weigh down creativity...',
        image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&q=80',
        content: `Let's be honest, clutter isn't just physical; it's emotional. A disorganized space can weigh down creativity, and an unchecked to-do list can drain joy before the day even begins. That's why at TaskGoose, we see home management as more than a checklist. It's a form of emotional wellness.

Inside the Goose Lab, our exploration often begins with one question: What does balance feel like? It's the feeling when your environment reflects calm. When your mind isn't juggling forgotten appointments or undone errands. When your surroundings help you breathe easier.

Our insights show that when homes are cared for, whether through structure, cleaning, or creative design, people experience measurable increases in focus and happiness. This philosophy drives the evolution of TaskGoose's ecosystem: an intentional blend of tech precision and human understanding.

We're building for the soul & mind as much as priorities. Because a well-managed home doesn't just look good it feels right.`
      },
      {
        id: 3,
        title: 'The Goose Behind the Grid: Rethinking Human Interaction in a Digital Age',
        excerpt: 'As technology grows more powerful, the world paradoxically feels lonelier. Automation handles more, yet empathy seems to fade...',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
        content: `As technology grows more powerful, the world paradoxically feels lonelier. Automation handles more, yet empathy seems to fade in the noise. Inside the Goose Lab, we constantly ask how can we restore human warmth in a digital-first future?

Our answer lies in creating human-centered design. Every decision we make from how Smart Taskers interact with services to how Goose professionals and our partners communicate, reflects one truth: technology should amplify empathy, not replace it.

We envision a world where people still feel seen and supported, even through a screen. Where digital tools bridge care, not create distance. TaskGoose's evolution is built on that principle because behind every algorithm is a person trying to make life easier for another person.

Maybe the future isn't just smart. Maybe it's also kind.`
      },
      {
        id: 4,
        title: 'The Quiet Revolution of Everyday Efficiency',
        excerpt: 'In the Goose Lab, we\'ve noticed that the most powerful transformations often start quietly in the tiny, daily routines...',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
        content: `In the Goose Lab, we've noticed that the most powerful transformations often start quietly in the tiny, daily routines we overlook. The moment your morning becomes smoother. The day you realize your errands don't drain you anymore. The subtle shift from chaos to calm is innovation in its purest form.

True efficiency isn't loud. It whispers. And at TaskGoose, we're listening closely redesigning the way people manage life, one habit at a time. The result? Systems that respond naturally to your pace, anticipate needs, and align tasks to time not time to tasks.

It's not about doing more. It's about feeling lighter while doing what matters most.`
      },
      {
        id: 5,
        title: 'The Flight Ahead: Why the Future Belongs to the Adaptive',
        excerpt: 'If the last decade has taught us anything, it\'s that change is constant but adaptability is power...',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        content: `If the last decade has taught us anything, it's that change is constant but adaptability is power. In homes, workplaces, and communities, the winners of tomorrow will be those who build systems flexible enough to evolve.

Inside the Goose Lab, adaptability is our north star. We study behavior, environment, and interaction not just to respond to change, but to predict it. The future of living will belong to platforms that adjust as you do that sense, sync, and support in real time.

The Goose Lab is our incubator for that evolution. Each project, each prototype, each story we test brings us closer to a single goal: to create technology that grows with you, not ahead of you.

The future is flexible and it's already hatching.`
      }
    ];

    return (
      <div className="min-h-screen transition-colors duration-300" style={{backgroundColor: 'var(--background)'}}>
        <DarkModeToggle />
        <Goosistant ref={goosistantRef} />
        <Header />
        
        <section className="pt-32 pb-16 px-6 transition-colors duration-300" style={{background: 'linear-gradient(to bottom right, rgba(168, 230, 207, 0.1), var(--background))'}}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-bounce">🥚</div>
            <h1 className="text-5xl font-bold mb-6">Welcome to the Lab</h1>
            <p className="text-2xl mb-4" style={{color: 'var(--primary-color)'}}>Where innovation takes flight</p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                Inside the Goose Lab is where ideas stretch their wings before they take flight. It's more than a think-space it's where TaskGoose re-imagines how technology can ease daily living, improve household management, and elevate human experience without losing its warmth.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                We don't just build features; we craft ecosystems that think, adapt, and care. Here, design meets empathy, data meets intuition, and automation meets purpose.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                Every prototype we nurture in the Lab is guided by 4 values:
              </p>
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {['Trust', 'Innovation', 'Empathy', 'Empowerment'].map((value, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl" style={{backgroundColor: 'var(--primary-color)', opacity: 0.1}}>
                    <p className="font-bold text-lg" style={{color: 'var(--accent-color)', opacity: 1}}>{value}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                While the full spectrum of what's being built remains behind the curtain, our work explores predictive intelligence, connected living, and seamless support always centered on one goal: to make everyday life lighter, smarter, and more efficient.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Inside the Goose Lab is your front-row seat to our journey while we design the future of smart living and you join us in exploring ideas, testing possibilities, and sharing insights on how technology, design, and everyday life can work together seamlessly. From AI-driven home management to the psychology of productivity, join us as we unpack the stories, discoveries, and breakthroughs shaping how TaskGoose helps you live, work, and thrive better in a fast paced world.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Get a feel of what's hatching next</h2>

            {!selectedArticle ? (
              <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <div key={article.id} className="rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 group hover:shadow-2xl hover:scale-[1.03]" style={{backgroundColor: 'var(--card-background)'}} onClick={() => setSelectedArticle(article)}>
                    <div className="relative overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary-color)] transition-colors">{article.title}</h3>
                      <p className="text-[var(--text-secondary)] mb-4">{article.excerpt}</p>
                      <button className="text-[var(--primary-color)] font-semibold hover:underline flex items-center group-hover:translate-x-2 transition-transform">
                        Read More <div className="icon-arrow-right text-lg ml-2"></div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl p-8 shadow-lg transition-colors duration-300" style={{backgroundColor: 'var(--card-background)'}}>
                <button onClick={() => setSelectedArticle(null)} className="mb-6 text-[var(--text-secondary)] hover:text-[var(--primary-color)] flex items-center">
                  <div className="icon-arrow-left text-lg mr-2"></div> Back to Articles
                </button>
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-64 object-cover rounded-xl mb-6" />
                <h2 className="text-3xl font-bold mb-6">{selectedArticle.title}</h2>
                <div className="prose prose-lg max-w-none">
                  {selectedArticle.content.split('\n\n').map((para, idx) => (
                    <p key={idx} className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">{para}</p>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-br from-[var(--primary-color)]/10 to-white rounded-xl">
                  <p className="text-lg italic text-[var(--text-secondary)] mb-6 text-center">
                    "Keep your eyes open for what's hatching next. Subscribe to stay in the loop."
                  </p>
                  <div className="text-center">
                    <a href="https://tally.so/r/44QDGO" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all" style={{backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)'}}>
                      Subscribe to Gooseletter
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <Newsletter />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('GooseLabPage error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><GooseLabPage /></ErrorBoundary>);