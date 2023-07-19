import { pageBack, pageReload, countAddOne } from './sampleEvent';

export const Sample = () => {
  return (
    <div>
      <button onClick={pageBack}>戻るボタン</button>
      <button onClick={pageReload}>リロードする</button>
      <button onClick={countAddOne}>1増やす</button>
    </div>
  );
};
