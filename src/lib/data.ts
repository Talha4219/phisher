import { PlaceHolderImages } from '@/lib/placeholder-images';

type Author = {
  name: string;
  avatarUrl: string;
};

export type Post = {
  id: string;
  title: string;
  author: Author;
  publishDate: string;
  featuredImage: {
    src: string;
    alt: string;
    hint: string;
  };
  content: string;
  excerpt: string;
};

export type RelatedPost = {
  id: string;
  title: string;
  category: string;
  image: {
    src: string;
    alt: string;
    hint: string;
  };
};

const author: Author = {
  name: "Alex Johnson",
  avatarUrl: "https://picsum.photos/seed/author/40/40",
};

const featuredImagePlaceholder = PlaceHolderImages.find(p => p.id === 'elon-musk-tesla')!;
const relatedImage1 = PlaceHolderImages.find(p => p.id === 'spacex-rocket')!;
const relatedImage2 = PlaceHolderImages.find(p => p.id === 'neuralink-chip')!;
const relatedImage3 = PlaceHolderImages.find(p => p.id === 'gigafactory-production')!;

export const blogPost: Post = {
  id: "1",
  title: "Elon Musk Announces Radical New Work-From-Home Policy at Tesla",
  author,
  publishDate: "October 26, 2023",
  featuredImage: {
    src: featuredImagePlaceholder.imageUrl,
    alt: featuredImagePlaceholder.description,
    hint: featuredImagePlaceholder.imageHint,
  },
  excerpt: "In a company-wide email that has since been made public, Elon Musk has outlined a new, stricter policy regarding remote work for Tesla's salaried employees.",
  content: `
    <p class="lead">In a company-wide email that has since been made public, Elon Musk has outlined a new, stricter policy regarding remote work for Tesla's salaried employees, signaling a major shift from the flexible arrangements that became common during the pandemic.</p>
    <p>The new directive, effective immediately, requires all employees to spend a minimum of 40 hours per week in a main Tesla office. "This is less than we ask of factory workers," Musk wrote in the email, which was titled "To be super clear."</p>
    <h2>The Rationale Behind the Decision</h2>
    <p>Musk justified the policy by emphasizing the importance of in-person collaboration for innovation. "Tesla has and will create and actually manufacture the most exciting and meaningful products of any company on Earth. This will not happen by phoning it in," he argued. He believes that the serendipitous encounters and spontaneous discussions that occur in an office environment are crucial for a company that prides itself on rapid innovation and cutting-edge engineering.</p>
    <p>For more details on Tesla's innovation culture, you can visit the official <a href="https://www.tesla.com/blog" target="_blank" rel="noopener noreferrer">Tesla blog</a>.</p>
    <h3>Key Points of the New Policy:</h3>
    <ul>
      <li><strong>Minimum 40 hours/week in-office:</strong> This applies to all salaried employees.</li>
      <li><strong>"Main office" requirement:</strong> Employees must work from a primary Tesla office, not a remote branch office unrelated to their job duties.</li>
      <li><strong>Case-by-case exceptions:</strong> Musk stated he would personally review and approve any requests for exceptions, though he implied they would be rare.</li>
      <li><strong>"Assume you have resigned":</strong> The email concludes with a stark warning that anyone who does not wish to comply should "pretend they work somewhere else."</li>
    </ul>
    <h2>Industry Reactions and Implications</h2>
    <p>The move stands in stark contrast to the policies of many other tech giants, such as Twitter (before Musk's acquisition) and Meta, which have embraced remote or hybrid models. The decision has sparked a heated debate online, with some praising Musk's commitment to a strong work ethic and others criticizing it as outdated and out of touch with modern workforce expectations. The long-term effects on Tesla's ability to attract and retain top talent remain to be seen. More information can be found at <a href="https://www.reuters.com" target="_blank" rel="noopener noreferrer">Reuters</a>.</p>
  `,
};

export const relatedPosts: RelatedPost[] = [
  {
    id: "2",
    title: "The Starship Saga: SpaceX's Next Giant Leap for Humanity",
    category: "Space",
    image: {
      src: relatedImage1.imageUrl,
      alt: relatedImage1.description,
      hint: relatedImage1.imageHint,
    },
  },
  {
    id: "3",
    title: "Neuralink's Progress: Brain-Computer Interfaces?",
    category: "Biotech",
    image: {
      src: relatedImage2.imageUrl,
      alt: relatedImage2.description,
      hint: relatedImage2.imageHint,
    },
  },
  {
    id: "4",
    title: "Inside the Gigafactory: Revolutionizing Manufacturing",
    category: "Automotive",
    image: {
      src: relatedImage3.imageUrl,
      alt: relatedImage3.description,
      hint: relatedImage3.imageHint,
    },
  },
];
