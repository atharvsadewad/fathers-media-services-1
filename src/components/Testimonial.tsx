type Props = {
  quote: string;
  author: string;
  role?: string;
};

export default function Testimonial({ quote, author, role }: Props) {
  return (
    <figure className="card p-6">
      <blockquote className="text-lg text-gray-700">“{quote}”</blockquote>
      <figcaption className="mt-2 text-sm text-gray-500">
        — {author}{role ? `, ${role}` : ""}
      </figcaption>
    </figure>
  );
}



