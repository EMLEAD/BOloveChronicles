import React from 'react'
import './HusbandStoryModal.css'

const HusbandStoryModal = ({ isOpen, onClose, isDarkMode }) => {
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
          <h2 className="modal-title">Caleb's Love Story</h2>
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
              src="/images/groom.jpg" 
              alt="Caleb's Story" 
              className="story-image-real"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div class="placeholder-icon"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><p>Caleb\'s Story Photo</p><span class="image-caption">Add your beautiful photo here</span>'
              }}
            />
          </div>

          <div className="story-text">
            <div className="story-chapter">
              <h3 className="chapter-title">How I Met My Wife-to-Be 💫</h3>
              <div className="story-paragraph">
                <p>
                  It was a hectic day in 2019, and I was deep into my shift as a pharmacist at Jaja Clinic, Ui. The hospital pharmacy was a whirlwind of activity - prescriptions piling up, and patients waiting at the counter. My days were filled with dispensing medications, counseling patients, and double-checking prescriptions, but there was a certain rhythm to it that I loved.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  That morning, I was behind the dispensing counter, attending to patients as I routinely do, when I noticed a young lady standing near the pickup window to get her prescriptions (apparently for her friend who was admitted). I dispensed the medications, carefully explaining the dosage regimen and instructions. Before she left, I wrote my contact at the back of the prescription sheet copy and told them to contact me if there is any issue with the drugs or her condition.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  Later in the day, her friend (my wife😉) texted to thank me, and that was that. We never conversed since then and she was just a contact list on my phone… Well, I never knew that a seed has been sown on that fateful day - a connection that would go beyond the dispensing counter ☺️
                </p>
              </div>
            </div>

            <div className="story-divider"></div>

            <div className="story-chapter">
              <h3 className="chapter-title">How we reconnected 🌺</h3>
              <div className="story-paragraph">
                <p>
                  For years, she was just a random contact list on my phone. On that fateful Sunday, I went for a cover shift at a pharmacy. After attending to a set of patients, I decided to scroll through people's status on WhatsApp (which I don't even often do).
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  I came across her post and I just reacted to it. She replied and playfully, we started talking. Truth be told, I never envisaged something romantic could ever happen between us when I initially texted her.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  Anyways, as we got talking, I could sense that feeling☺️, and by nightfall, I was really really interested….😄
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  It was not even up to 3 days before I knew this was my wife. And I told her right away that she's the ONE and I will MARRY HER.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  Well, as ladies always say, she said "let me think about it", "i need confirmation from God", and "we are in talking stage" yen yen yen… In my mind, I was like, when you are done pretending to yourself you will let me know😂😂. Player that I've already signed to my club 😂
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  Barely 3 weeks later, we decided to meet for the first time since 2019, and honestly I was nervous 🫣. We met, I told her my plans, contract signed, and the rest they say, IS HISTORY 🫠🌹
                </p>
              </div>
            </div>

        

            <div className="story-divider"></div>

            <div className="story-chapter">
              <h3 className="chapter-title">Our Beautiful Journey So Far ❤️‍🔥</h3>
              <div className="story-paragraph">
                <p>
                  From the moment our paths truly crossed, our love story has felt like a beautiful, unfolding journey, one grounded in deep friendship and elevated by an unwavering love.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  I could remember one of the very first questions she asked me when we started talking: "Are you a child of God?". She is a believer, and this is a particular trait I wanted in my woman. We do pray together, have bible studies together and sometimes we fast. Essentially, God has been the foundation of this relationship ❤️‍🩹
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  My wife has, without a doubt, being my best friend, the person I turn to with every joy and every worry. This friendship has made our life together easy, fun, and authentic.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  Her caring, selfless nature is a light in my life, illuminating even the darkest days. Beyond that, her supportive spirit has been a constant source of strength. I can never forget the day she sent me a huge amount of money surprisingly 🥹
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  Whether I'm chasing a dream or facing a challenge, she is always in my corner, offering encouragement and belief. I am endlessly proud of how hardworking she is, a trait that inspires me daily. She approaches everything with dedication, passion, and an incredible resolve.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  More than all of this, her loving heart is the most precious gift.💝 It's a love that is pure, profound, and steady. As we look forward to the future, I know that every chapter yet to be written will be as wonderful as the one we've shared, because we walk it together, hand in hand, as partners, lovers, and the very best of friends 💞
                </p>
              </div>
            </div>

            <div className="story-divider"></div>

            <div className="story-chapter vows-chapter">
              <h3 className="chapter-title">My vows to you 💍</h3>
              <div className="story-paragraph">
                <p>
                  My Dearest Elizabeth, I vow to be your faithful and devoted husband, to choose you every single day, not just now, but for all the days that follow.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  I promise to be the strongest foundation for our family, to work tirelessly to build a wonderful life together, and to cherish the home we create.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  You are the most caring, supportive, and loving person I know. I promise to be your biggest cheerleader in every dream you chase and your softest place to land when the world is tough.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  I promise to listen, to forgive, and to always communicate honestly, even when it's hard. I take you as my wife, my partner, and my best friend.
                </p>
              </div>
              <div className="story-paragraph">
                <p>
                  Today, I give you my heart completely, and I cannot wait to say, "I do," to all the beautiful moments, big and small, that our future holds🌺❤️
                </p>
              </div>
              <div className="story-paragraph signature">
                <p>
                  So help me God 🙏🌹<br />
                  <strong>~ RxCaleb 💞</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HusbandStoryModal
