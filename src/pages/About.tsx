const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-mono mb-12">About</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-mono mb-4">The Label</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2024, your_label is an independent electronic music label 
              dedicated to releasing forward-thinking ambient, experimental, and 
              electronic music. We focus on quality over quantity, carefully 
              curating releases that push boundaries and explore new sonic territories.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono mb-4">Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe in the power of electronic music to create immersive 
              experiences and emotional connections. Our releases span from deep 
              ambient works to experimental sound design, always maintaining a 
              focus on artistic integrity and innovation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-mono mb-4">Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              Each release is carefully crafted and presented with attention to 
              detail, from the music selection to the visual design. We work 
              closely with our artists to ensure their vision is fully realized 
              and properly represented.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-mono mb-4">Contact</h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-mono text-muted-foreground">Email:</span>
                <br />
                <a href="mailto:contact@yourlabel.com" className="text-accent hover:underline">
                  contact@yourlabel.com
                </a>
              </p>
              <p>
                <span className="font-mono text-muted-foreground">Demos:</span>
                <br />
                <a href="mailto:demos@yourlabel.com" className="text-accent hover:underline">
                  demos@yourlabel.com
                </a>
              </p>
              <p>
                <span className="font-mono text-muted-foreground">Press:</span>
                <br />
                <a href="mailto:press@yourlabel.com" className="text-accent hover:underline">
                  press@yourlabel.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-mono mb-4">Social</h2>
            <div className="space-y-2 text-sm">
              <p>
                <a href="#" className="text-accent hover:underline font-mono">
                  Bandcamp →
                </a>
              </p>
              <p>
                <a href="#" className="text-accent hover:underline font-mono">
                  SoundCloud →
                </a>
              </p>
              <p>
                <a href="#" className="text-accent hover:underline font-mono">
                  Instagram →
                </a>
              </p>
              <p>
                <a href="#" className="text-accent hover:underline font-mono">
                  Twitter →
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-mono mb-4">Demo Policy</h2>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• Send 3-5 of your best tracks</p>
              <p>• Include brief artist bio and project description</p>
              <p>• MP3 or WAV files accepted</p>
              <p>• We listen to everything but can't respond to all submissions</p>
              <p>• No follow-up emails please</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <p className="text-center text-sm text-muted-foreground font-mono">
          Est. 2024 — Independent Electronic Music
        </p>
      </div>
    </div>
  );
};

export default About;