import { JournalMedia as JournalMediaType } from '@/data/journalEntries';

interface JournalMediaProps {
  media: JournalMediaType;
}

const JournalMedia = ({ media }: JournalMediaProps) => {
  if (media.type === 'image') {
    return (
      <figure className="journal-media journal-media-image my-6">
        <img 
          src={media.src} 
          alt={media.caption || ''} 
          className="w-full max-w-md mx-auto block grayscale-[20%] opacity-90 hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
        />
        {media.caption && (
          <figcaption className="text-center text-sm text-muted-foreground mt-2 font-mono italic opacity-70">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (media.type === 'gallery' && media.images) {
    return (
      <figure className="journal-media journal-media-gallery my-4">
        <div className="flex gap-1 overflow-x-auto">
          {media.images.map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-16 h-16 overflow-hidden"
            >
              <img 
                src={src} 
                alt={media.caption ? `${media.caption} ${index + 1}` : `Gallery image ${index + 1}`}
                className="w-full h-full object-cover grayscale-[30%] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {media.caption && (
          <figcaption className="text-sm text-muted-foreground mt-2 font-mono italic opacity-70">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (media.type === 'audio') {
    return (
      <figure className="journal-media journal-media-audio my-6">
        <audio 
          src={media.src} 
          controls 
          className="w-full max-w-sm mx-auto block opacity-80"
          preload="metadata"
        />
        {media.caption && (
          <figcaption className="text-center text-sm text-muted-foreground mt-2 font-mono italic opacity-70">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
};

export default JournalMedia;
