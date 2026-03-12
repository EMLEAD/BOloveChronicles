import React from 'react'
import './StoryModal.css'

const StoryModal = ({ isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div 
      className={`modal-backdrop ${isDarkMode ? 'dark-mode' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Our Love Story</h2>
          <button 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="modal-content">
          <div className="story-image">
            <img 
              src="/images/proposal.jpg" 
              alt="Our Story" 
              className="story-image-real"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div class="placeholder-icon"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><p>Our Story Photo</p><span class="image-caption">Add your beautiful couple photo here</span>'
              }}
            />
          </div>

          <div className="story-text">
            <div className="story-chapter">
              <h3 className="chapter-title">How I Met My Husband-to-Be 💫</h3>
              <div className="story-paragraph">
                <p>
                  I will always thank God for NYSC. That was where our paths crossed during our service year in 2022, in the most unexpected and beautiful way. It started playfully when we were randomly selected to join the Man O’ War team on camp. I had no idea that ordinary day would quietly shape my forever.

When it was time to introduce ourselves, I noticed him—calm, observant, a little reserved. After I introduced myself, he did something I would never forget. In a moment of bold playfulness, he jokingly knelt down to propose to me—a complete stranger he had just met. I laughed, surprised and amused, never imagining that what felt like a joke would one day become my real love story.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                 We exchanged numbers and began talking. Camp was busy, and we didn’t get to spend much time together. Later, I understood why—his heart was grieving. He had lost his father just two weeks before camp began. Even in his quietness, I sensed depth, strength, and sincerity. He wasn’t ready for anything serious then, and I respected that. Still, something about him felt different.

When posting letters came out, reality set in. I was posted far away from his Place of Primary Assignment. We went our separate ways physically, but our conversations on WhatsApp only grew stronger. Then one day, he told me he wanted me closer. Without hesitation, he began my relocation process—and by God’s grace, it was successful. I was reposted to Ibadan.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                 That gesture spoke louder than words.

On August 8, 2022, I officially said yes to starting a relationship with him. And from that day, love grew in the most beautiful, peaceful way. Then on May 24, 2025, he asked me another question—this time, not as a joke, but with intention and certainty. He asked me to spend forever with him. And once again, I said yes.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                 From the very beginning, there was something in my heart that felt safe with him. He brought a calmness, a joy, and a reassurance I had never experienced before. Loving him feels like home. In him, I found not just a partner, but peace, friendship, healing, and a love I am proud to call mine.

And now, we begin forever.
                </p>
              </div>
            </div>

          

            

            <div className="story-image-gallery">
              <div className="gallery-row">
              <img src="/images/chat3.jpg" alt="When Love Began" className="chat-screenshot"
                  onError={(e) => e.target.style.display = 'none'} />
                <img src="/images/chat2.jpg" alt="Our Conversation" className="chat-screenshot"
                  onError={(e) => e.target.style.display = 'none'} />

<img src="/images/chat1.jpg" alt="Our First Messages" className="chat-screenshot" 
                  onError={(e) => e.target.style.display = 'none'} />
               
              </div>
            </div>

        
            

            <div className="story-divider"></div>

            <div className="story-chapter">
              <h3 className="chapter-title">A Beautiful Journey So Far 🌸</h3>
              <div className="story-paragraph">
                <p>
                 This journey with him has been nothing short of beautiful — a love story written in laughter, tenderness, and the quiet peace that comes from knowing you are exactly where you belong.

Every morning feels sweeter because of him. Waking up to his thoughtful messages, his gentle reassurances, and the way he checks on me like I’m the most precious thing in his world has become one of my favorite rhythms of life.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  From unexpected credit alerts with the funniest transaction descriptions that leave me laughing, to our playful debates about why I refuse to buy sachet water in bulk or why I always wait until the groceries are completely finished before restocking — he loves me in the most intentional, attentive ways.

This man consistently refills my first-aid box without being asked, makes sure I never run out of my multivitamins, and reminds me daily to take better care of myself. And I still smile when I remember that on our very first date, he showed up with medicines, a blood pressure monitor, and thoughtful health essentials. Who does that? 😂
                </p>
              </div>
              <div className="story-paragraph">
                <p>
           My personal doctor. My caregiver. My safe place. The man who treats my comfort and wellbeing as his responsibility and never jokes with my peace.

To love him is to be cared for in ways both loud and quiet. And I am grateful for every single moment of it. 💖
                </p>
           <div> 
                   <img src="/images/chat4.jpg" alt="When Love Began" className="chat-screenshot"
                  onError={(e) => e.target.style.display = 'none'} />
           </div>

              </div>
            </div>

            <div className="story-divider"></div>

            <div className="story-chapter vows-chapter">
              <h3 className="chapter-title">My Vows to You 💍</h3>
              <div className="story-paragraph">
                <p>
                Today, as I stand before God and tie my life to yours, <b>Olaoluwa</b> mi owon, my heart is overwhelmed with gratitude. Heaven must have listened closely to the quiet prayers I whispered, because God answered me with you.

I thank God for the day our paths crossed.
I thank Him for the seed of love He planted in our hearts.
I thank Him, the Author and Perfecter of love, who teaches us daily how to love each other the way He loves us.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                 And I thank Him for sustaining this beautiful love story, for holding us, guiding us, and bringing us to this sacred moment.

You are not just the love of my life, you are my answered prayer in flesh and blood.
You are proof that God is mindful, intentional, and faithful.

With you, I have found peace. I have found joy. I have found home.
I look forward to laughing with you, praying with you, building with you, and yes, growing old and toothless with you, still holding your hands the way I am today.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                 I promise to honor you, to cherish you, to stand by you in strength and in weakness, in abundance and in little, in laughter and in tears.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                 I promise to choose you every single day for the rest of my life.

You are my God-given gift, and I will treasure you until my last breath. So help me God. 🤲
                </p>
              </div>
              <div className="story-paragraph signature">
                <p>
                  Ko dùn, ko pò, ko pé — our love will not fade, it will not diminish, it will not end.<br />
                  <strong>~ boLovechronicles '26</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryModal
