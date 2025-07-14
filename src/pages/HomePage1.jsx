import React, { Fragment } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { bg, collections } from '../Helpers/images';
import { Link } from 'react-router-dom';
function HomePage1() {
    return (
        <Fragment>
            <div className='main-heder absolute top-0 w-full z-[999]'>
                <Header />
            </div>
            <div className="lg:"></div>
            <section className="relative md:flex table w-full items-center md:h-screen py-36 bg-emerald-500/5 md:bg-top bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="text-center">
                            <span className="uppercase font-semibold text-lg">New Collection</span>
                            <h4 className="md:text-6xl text-4xl md:leading-normal leading-normal font-bold my-3">The Gift Suite</h4>
                            <p className="text-lg">Our latest collection of essential basics.</p>
                            <div className="mt-6">
                                <Link to="/ShopGrid" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-slate-900 dark:bg-orange text-white rounded-md">Shop Now <i className="mdi mdi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container mx-auto 2xl:px-52 xl:px-20 lg:px-11 px-4 relative">
                    <div className="grid grid-cols-1 justify-center text-center mb-6">
                        <h5 className="font-semibold text-3xl leading-normal mb-4">Shop The Collections</h5>
                        <p className="text-slate-400 max-w-xl mx-auto">Shop the latest products from the most popular collections</p>
                    </div>

                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 pt-6 gap-6">
                        {collections.map((item, index) => {
                            return (
                                <Link to="" className="text-center hover:text-orange-500" key={index}>
                                    <img src={item.image} className="rounded-full shadow dark:shadow-gray-800" alt="" />
                                    <span className="text-xl font-medium mt-3 block">{item.name}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
            <div className="div">
                <Footer />
            </div>
        </Fragment>
    )
}

export default HomePage1
