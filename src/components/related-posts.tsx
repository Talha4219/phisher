import { relatedPosts, type RelatedPost } from '@/lib/data';
import Image from 'next/image';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function RelatedPosts() {
  return (
    <div>
      <h2 className="mb-4 font-headline text-2xl font-bold">Related Posts</h2>
      <div className="space-y-4">
        {relatedPosts.map((post: RelatedPost) => (
          <Link href="#" key={post.id} className="block transition-transform hover:scale-[1.02]">
            <Card className="flex flex-col overflow-hidden shadow-md">
                <div className="relative aspect-video w-full">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={post.image.hint}
                    />
                </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                <CardTitle className="pt-2 text-base leading-snug">{post.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
