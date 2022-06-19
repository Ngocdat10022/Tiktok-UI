import React, { memo } from 'react';
import AcountItem from "../../../components/accounttem"
const Searchresult = ({ Searchresults }) => {
    return (
        <>
            {Searchresults.map((result) => {
                return <AcountItem key={result.id} data={result} />
            })}
        </>
    );
};

export default memo(Searchresult);