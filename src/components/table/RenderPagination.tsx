export const renderPagination = (
  pagination: any,
  pageHandle: any,
  styles: any
) => {
  if (!pagination) return null;

  const { totalPages, currentPage } = pagination;
  const maxPagesToShow = 3;
  const pages = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= maxPagesToShow) {
      for (let i = 1; i <= maxPagesToShow; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage > totalPages - maxPagesToShow) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }
  }

  return (
    <div className={styles.paginationContainer}>
      <button onClick={() => pageHandle(1)} disabled={currentPage === 1}>
        «
      </button>
      <button
        onClick={() => pageHandle(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className={styles.paginationEllipsis}>
            {page}
          </span>
        ) : (
          <p
            key={index}
            style={{
              color: currentPage === page ? "#fcd100" : "#333",
            }}
            onClick={() => pageHandle(page as number)}
          >
            {page}
          </p>
        )
      )}
      <button
        onClick={() => pageHandle(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
      <button
        onClick={() => pageHandle(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
};
