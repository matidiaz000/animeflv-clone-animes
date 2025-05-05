const CardListSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="row my-n4 py-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

const CardSkeleton = () => 
  <div className="col-4 col-sm-3 col-lg-2 my-4">
      <span className="rounded bg-gray-400" style={{aspectRatio: "2 / 3"}}></span>
      <div className="px-2 py-3 d-flex flex-column align-items-center">
        <span className="rounded bg-gray-400 mb-1" style={{width: "75%", height: 20}}></span>
        <span className="rounded bg-gray-400 mt-3" style={{width: 100, height: 15}}></span>
      </div>
    </div>;

export default CardListSkeleton;
