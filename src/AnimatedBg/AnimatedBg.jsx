import React from 'react'
import PropTypes from 'prop-types'

import Github from "./BgSvg/github.svg?react";
import Battery from "./BgSvg/battery.svg?react";
import Bike from "./BgSvg/bike.svg?react"
import  Bootstrap from "./BgSvg/bootstrap.svg?react"
import Cloud from "./BgSvg/cloud.svg?react"
import Code from "./BgSvg/code.svg?react"
import Coffee from "./BgSvg/coffee.svg?react"
import Figma from "./BgSvg/figma.svg?react"
import Flask from "./BgSvg/flask.svg?react"
import Game from "./BgSvg/game.svg?react"
import Git from "./BgSvg/git.svg?react"
import Heart from "./BgSvg/heart.svg?react"
import Home from "./BgSvg/home.svg?react"
import Html from "./BgSvg/html.svg?react"
import Jquery from "./BgSvg/jquery.svg?react"
import Js from "./BgSvg/js.svg?react"
import Keyboard from "./BgSvg/keyboard.svg?react"
import Linkedin from "./BgSvg/linkedin.svg?react"
import Mic from "./BgSvg/mic.svg?react"
import Mongodb from "./BgSvg/mongodb.svg?react"
import Monitor from "./BgSvg/monitor.svg?react"
import Paper from "./BgSvg/paper.svg?react"
import Slack from "./BgSvg/slack.svg?react"
import Sql from "./BgSvg/sql.svg?react"
import Python from "./BgSvg/python.svg?react"
import Reactlogo from "./BgSvg/reactlogo.svg?react"
import Time from "./BgSvg/time.svg?react"
import Ux from "./BgSvg/ux.svg?react"
import Vue from "./BgSvg/vue.svg?react"
import Web from "./BgSvg/web.svg?react"
import Wifi from "./BgSvg/wifi.svg?react"
import Cellphone from "./BgSvg/cellphone.svg?react"

import "./AnimatedBg.css"


function AnimatedBg({ children }) {
  let arr = [];
  let qty = 15;

  for (let i = 0; i < qty; i++) {
    arr.push(i);
  }

  const layers = arr.map(i => (
    <div key={i} className="animated-row">
      <div className="row1">
      <Github />
      <Battery />
      <Ux />
    <Bootstrap />
    <Cloud />
    <Code />
    <Python />
    <Figma />
    <Flask />
    <Game />
    <Git />
    <Heart />
    <Home />
    <Html />
    <Jquery />
    <Js />
    <Keyboard />
    <Linkedin />
    <Mic />
    <Mongodb />
    <Monitor />
    <Paper />
    <Slack />
    <Sql />
    <Reactlogo />
    <Time />
    <Coffee />
    <Vue />
    <Web />
    <Bike />
    <Wifi />
    <Cellphone />
      </div>

      {/* <div className="row2">
      <Battery />
    <Bike />
    <Bootstrap />
    <Cloud />
    <Code />
    <Coffee />
    <Figma />
    <Flask />
    <Game />
    <Git />
    <Heart />
    <Home />
    <Html />
    <Jquery />
    <Js />
    <Keyboard />
    <Linkedin />
    <Mic />
    <Mongodb />
    <Monitor />
    <Paper />
    <Slack />
    <Sql />
    <Python />
    <Reactlogo />
    <Time />
    <Ux />
    <Vue />
    <Web />
    <Wifi />
    <Cellphone />
      </div> */}
    </div>
  ));

  return (
    <section className="animated-section">
      {layers}
      {children}
    </section>
  );
}

AnimatedBg.propTypes = {
  children: PropTypes.node
};

export default AnimatedBg;
