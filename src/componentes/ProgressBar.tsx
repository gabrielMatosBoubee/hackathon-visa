import style from '../styles/Header.module.css';

interface props {
    percentage: number, 
    color: string,
    name: string
}

const ProgressBar = ({ percentage, color, name }: props) => {
  return (
    <div className={ style.progressBarWrapper}>
    <p className={ style.progressBarName }>{name}</p>
      <div
        className={ style.progressBar }
        style={{
            width: `${percentage}%`,
            backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ProgressBar;
