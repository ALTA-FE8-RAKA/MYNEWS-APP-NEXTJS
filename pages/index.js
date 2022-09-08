import axios from "axios";
import React from "react";
import CardContent from "../components/CardContent";
import Navbar from "../components/Navbar";
import Router from "next/router";

export const getServerSideProps = async () => {
  const response = await axios.get(`https://inshorts.deta.dev/news?category=startup`);
  const listNews = response.data.data;
  return {
    props: {
      listNews: listNews,
    },
  };
};

const handleDetailNews = (item) => {
  Router.push({
    pathname: `/detailnews/`,
    query: {
      image: item.imageUrl,
      title: item.title,
      content: item.content,
    },
  });
};

const Index = ({ listNews }) => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            {listNews.map((item) => {
              return (
                <>
                  <div className="flex flex-col bg-slate-300 border rounded-lg overflow-hidden" key={item.id}>
                    <CardContent image={item.imageUrl} title={item.title} content={item.content} author={item.author} date={item.date} onClickDetail={() => handleDetailNews(item)} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
