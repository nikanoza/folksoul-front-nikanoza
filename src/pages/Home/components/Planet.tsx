import { Twitter } from 'assets';
import { member } from 'types';

const Planet: React.FC<{
  className: string;
  stopAnimation: (singer: member) => void;
  singer: member;
  clickedSinger: member | null;
}> = (props) => {
  const stopAnimationHandler = () => {
    props.stopAnimation(props.singer);
  };

  return (
    <div
      className={
        `${
          props.clickedSinger?.name === props.singer.name
            ? 'w-24 h-24'
            : 'w-20 h-20'
        } rounded-full border-2 border-[#F2C94C] flex justify-center items-center relative top-1/2 -ml-10 -mt-10 cursor-pointer drop-shadow-[8px_8px_32px_#000000] ` +
        props.className
      }
      style={{
        backgroundColor: props.singer.color,
        animationDelay: 100 / props.singer.orbitLength + 's',
        animationDuration: 3000 / props.singer.orbitLength + 's',
      }}
      onClick={stopAnimationHandler}
    >
      <img src={Twitter} alt='' />
      <div
        className={`w-20 h-10 border-4 bg-[#F2C94C] flex justify-center items-center absolute top-3/4 rounded-[50px]`}
        style={{ borderColor: props.singer.color }}
      >
        <span className='truncate'>{props.singer.name}</span>
      </div>
    </div>
  );
};

export default Planet;
