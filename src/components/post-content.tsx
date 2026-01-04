"use client";

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { blogPost } from '@/lib/data';
import { CalendarDays, Share2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function PostContent() {
    const { title, author, publishDate, featuredImage, content, excerpt } = blogPost;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-card p-6 sm:p-8 md:p-12 rounded-lg shadow-lg">
            <article>
                <header className="mb-8 border-b pb-8">
                    <h1 className="font-headline text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={author.avatarUrl} alt={author.name} />
                                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" />
                            <time dateTime={publishDate}>{publishDate}</time>
                        </div>
                    </div>
                </header>

                <div className="my-8 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src={featuredImage.src}
                        alt={featuredImage.alt}
                        width={1200}
                        height={600}
                        priority
                        className="h-full w-full object-cover"
                        data-ai-hint={featuredImage.hint}
                    />
                </div>

                <div
                    className="prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: isExpanded ? content : excerpt }}
                />

                {!isExpanded && (
                    <div className="mt-8 flex justify-center gap-4">
                        <Button asChild>
                            <Link href="/login">Read More</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/instagram-login">
                                <Share2 className="mr-2 h-4 w-4" />
                                Share
                            </Link>
                        </Button>
                    </div>
                )}
            </article>
        </div>
    );
}
