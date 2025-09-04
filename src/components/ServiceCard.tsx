type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="card p-6 h-full">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}



