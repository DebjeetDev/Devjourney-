
type Topic= {
    name:string,
    done:boolean
}
function TopicCard({ topic }: { topic: Topic }) {
  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.done ? 'Done' : 'Not done'}</p>
    </div>
  );
}

export default TopicCard;