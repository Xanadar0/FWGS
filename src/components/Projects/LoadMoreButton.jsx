import styles from './Projects.module.css';

export default function LoadMoreButton({ isAllVisible, onClick }) {
  return (
    <div className={styles.loadMoreWrapper}>
      <button onClick={onClick} className={styles.loadMoreBtn}>
        {isAllVisible ? 'Show less' : 'Load more'}
      </button>
    </div>
  );
}