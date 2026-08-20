import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Phone, Mail, ChevronDown, RefreshCw, User } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 I'm Gail Harpole's AI Assistant with Ready Real Estate. How can I help you today? Ask about buying, selling, recent sold deals, or North Texas property valuations!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAttentionGrabber, setShowAttentionGrabber] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowAttentionGrabber(false); // Hide grabber when opened
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    // Show attention grabber after 3 seconds if not opened
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowAttentionGrabber(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const quickPrompts = [
    "🏡 Show recent sold properties",
    "📈 What is my home worth?",
    "💰 Calculate monthly mortgage",
    "📅 Schedule a consultation with Gail"
  ];

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate realistic AI backend response
    setTimeout(() => {
      setIsTyping(false);
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Thank you for reaching out! 🚀 Our AI backend integration is currently connecting with Gail's live MLS data feed and will be fully live soon.\n\nIn the meantime, Gail Harpole is available directly to help with your real estate needs:",
        isCallout: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botReply]);
    }, 900);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Gail AI Chat"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              background: 'linear-gradient(135deg, #E11D48 0%, #C8102E 50%, #881337 100%)',
              color: '#FFF',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '0',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(200, 16, 46, 0.45), 0 0 15px rgba(200, 16, 46, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              fontSize: '0.95rem',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(200, 16, 46, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(200, 16, 46, 0.45), 0 0 15px rgba(200, 16, 46, 0.3)';
            }}
          >
            {showAttentionGrabber && (
              <div style={{
                position: 'absolute',
                bottom: '120%',
                right: '0',
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#1E293B',
                padding: '0.65rem 1rem',
                borderRadius: '12px 12px 0 12px',
                fontSize: '0.85rem',
                fontWeight: '600',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                animation: 'chatSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                👋 Hi! I'm Gail AI, how can I help?
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAttentionGrabber(false);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#64748B',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                    marginLeft: '0.2rem'
                  }}
                >
                  <X size={14} />
                </button>
                {/* Arrow pointing down */}
                <div style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: '24px',
                  width: '12px',
                  height: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  transform: 'rotate(45deg)',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  borderRight: '1px solid rgba(0,0,0,0.05)'
                }} />
              </div>
            )}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Bot size={22} />
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '9px',
                height: '9px',
                background: '#4ADE80',
                borderRadius: '50%',
                border: '2px solid #C8102E'
              }}></span>
            </div>
          </button>
        )}

        {/* Chatbot Window */}
        {isOpen && (
          <div style={{
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            height: '540px',
            maxHeight: 'calc(100vh - 100px)',
            background: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '20px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(200, 16, 46, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'chatSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            
            {/* Chat Header */}
            <div style={{
              padding: '1rem 1.25rem',
              background: 'linear-gradient(135deg, #1E1B4B 0%, #881337 50%, #C8102E 100%)',
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  position: 'relative',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}>
                  <Bot size={22} color="#FFF" />
                  <span style={{
                    position: 'absolute',
                    bottom: '1px',
                    right: '1px',
                    width: '10px',
                    height: '10px',
                    background: '#22C55E',
                    borderRadius: '50%',
                    border: '2px solid #1E1B4B'
                  }}></span>
                </div>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: '800', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    Gail's Assistant <Sparkles size={13} color="#FBBF24" />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }}></span>
                    Ready Real Estate • Online
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  border: 'none',
                  color: '#FFF',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div style={{
              flexGrow: 1,
              overflowY: 'auto',
              padding: '1.25rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.9rem',
              background: 'radial-gradient(ellipse at top, rgba(30, 41, 59, 0.5) 0%, rgba(11, 15, 25, 0.95) 100%)'
            }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '86%',
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div style={{
                    background: msg.sender === 'user'
                      ? 'linear-gradient(135deg, #E11D48 0%, #C8102E 100%)'
                      : '#1E293B',
                    color: '#FFF',
                    padding: '0.75rem 1rem',
                    borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    fontSize: '0.84rem',
                    lineHeight: '1.45',
                    border: msg.sender === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                    wordBreak: 'break-word'
                  }}>
                    <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{msg.text}</p>
                    
                    {/* Callout Action Buttons when backend integration is simulated */}
                    {msg.isCallout && (
                      <div style={{
                        marginTop: '0.75rem',
                        paddingTop: '0.65rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem'
                      }}>
                        <a
                          href="tel:9405977327"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            background: 'rgba(200, 16, 46, 0.25)',
                            border: '1px solid rgba(200, 16, 46, 0.4)',
                            color: '#FCA5A5',
                            padding: '0.45rem 0.75rem',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            textDecoration: 'none'
                          }}
                        >
                          <Phone size={14} /> Call Gail: (940) 597-7327
                        </a>
                        <a
                          href="#contact"
                          onClick={() => setIsOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            color: '#CBD5E1',
                            padding: '0.45rem 0.75rem',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            textDecoration: 'none'
                          }}
                        >
                          <Mail size={14} /> Submit Request Form
                        </a>
                      </div>
                    )}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.25rem', padding: '0 0.3rem' }}>
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: '#1E293B',
                  padding: '0.65rem 0.9rem',
                  borderRadius: '16px 16px 16px 4px',
                  alignSelf: 'flex-start',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}>
                  <span className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F87171' }}></span>
                  <span className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F87171', animationDelay: '0.2s' }}></span>
                  <span className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F87171', animationDelay: '0.4s' }}></span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            {messages.length === 1 && (
              <div 
                className="slim-scrollbar"
                style={{
                padding: '0.5rem 0.85rem',
                display: 'flex',
                gap: '0.4rem',
                overflowX: 'auto',
                background: 'rgba(15, 23, 42, 0.9)',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                whiteSpace: 'nowrap'
              }}>
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(prompt)}
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'var(--text-secondary)',
                      fontSize: '0.74rem',
                      fontWeight: '600',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(200, 16, 46, 0.2)';
                      e.currentTarget.style.color = '#FFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div style={{
              padding: '0.85rem 1rem',
              background: 'rgba(15, 23, 42, 0.95)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="text"
                  placeholder="Ask a question..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    flexGrow: 1,
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    padding: '0.65rem 0.9rem',
                    color: '#FFF',
                    fontSize: '0.84rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim()}
                  style={{
                    background: inputMessage.trim() ? 'var(--primary-gradient)' : 'rgba(255,255,255,0.08)',
                    color: '#FFF',
                    border: 'none',
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    cursor: inputMessage.trim() ? 'pointer' : 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    opacity: inputMessage.trim() ? 1 : 0.4
                  }}
                  aria-label="Send Message"
                >
                  <Send size={16} />
                </button>
              </div>

              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                Gail Harpole Real Estate • Backend integration coming soon
              </div>
            </div>

          </div>
        )}
      </div>

      <style>{`
        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounceDot {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
        }

        .typing-dot {
          animation: bounceDot 1.4s infinite ease-in-out both;
        }

        /* Slim Scrollbar for Quick Prompts */
        .slim-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .slim-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
        }
        .slim-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
        }
        .slim-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
}
