const ProgressBar = ({ porcentaje }: { porcentaje: string }) => {
    return (
        <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
            className="bg-textSecondary h-2.5 rounded-full"
            style={{ width: porcentaje }}
            ></div>
        </div>
    );
};

export {ProgressBar}