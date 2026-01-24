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
