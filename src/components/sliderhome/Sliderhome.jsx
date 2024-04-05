import React, { useEffect, useState } from 'react';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';
import Img4 from '../../assets/img4.jpg';
import Img5 from '../../assets/img5.jpg';
import './Sliderhome.css';

const Sliderhome = () => {

    return (
        <div className="carousel next">
            <div className="lists">
                <div className="items">
                    <img src={Img5} alt="Slider Image"/>
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">ANIMAL</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                {/* ตำแหน่งที่รับรูป */}
                <div className="items">
                    <img src={Img5} alt="Slider Image"/>
                    {/* ตำแหน่งที่รับข้อความ */}
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">ANIMAL</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <img src={Img5} alt="Slider Image"/>
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">ANIMAL</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <img src={Img5} alt="Slider Image"/>
                    <div className="content">
                        <div className="author">LUNDEV</div>
                        <div className="title">DESIGN SLIDER</div>
                        <div className="topic">ANIMAL</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                        </div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
            </div>
            <div className="time"></div>
        </div>
    );
};

export default Sliderhome;
