import './BasicList.css'

export default function BasicList({ value }) {
  return (
    <div>
        <h1 className='clean-time-count'>{value}</h1>
        <h1 className='na-quote'>"You can only keep what you have by giving it away"</h1>
        <h1 className='daily-prayer'>"God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference."</h1>
    </div>
  );
}