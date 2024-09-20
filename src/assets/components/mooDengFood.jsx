const MooDengFood = ({ title, exp, imgURL, onFeed }) => {
    return (
        <button type="button" className="btn btn-success card" onClick={onFeed}>
            <div
                style={{
                    width: '110px',
                    height: '80px',
                }}
            >
                <img
                    src={imgURL}
                    alt={title}
                    className="rounded-3"
                    style={{ width: '100%' }}
                />
            </div>
            <p className="mb-0 fw-bold">{title}</p>
            <p>exp +{exp}</p>
        </button>
    );
};

export default MooDengFood;