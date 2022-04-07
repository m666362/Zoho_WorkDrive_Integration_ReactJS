import { useState, useEffect } from "react";

export const useTableSearch = ({ searchVal, retrieve }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [searchIndex, setSearchIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const crawl = (data, allValues) => {
      if (!allValues) allValues = [];
      for (var key in data) {
        if (typeof data[key] === "object") {
          crawl(data[key], allValues);
        } 
        // else if (typeof data[key] === "array") {
        //   data[key].map((d, i)=>{
        //     crawl(i, allValues)
        //   })
        // }
        else if(key=="name"){
          allValues.push(data[key] + " ");
        } 
      }
      return allValues;
    };

    const fetchData = async () => {
      setOrigData(retrieve);
      setFilteredData(retrieve);
      const searchInd = retrieve.map((item) => {
        const allValues = crawl(item);
        return { allValues: allValues.toString()};
      });
      setSearchIndex(searchInd);
      if (retrieve) setLoading(false);
    };

    fetchData();
  }, [retrieve]);

  useEffect(() => {
    if (searchVal) {
      const reqData = searchIndex.map((data, index) => {
        if (data.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
          return origData[index];
        return null;
      });
      setFilteredData(
        reqData.filter((data) => {
          if (data) return true;
          return false;
        })
      );
    } else setFilteredData(origData);
  }, [searchVal, origData, searchIndex]);

  return { filteredData, loading };
};
