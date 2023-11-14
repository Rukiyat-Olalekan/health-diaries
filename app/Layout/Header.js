"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <div>
        <h1 className="logo">Health diaries</h1>
      </div>
      <nav className="nav">
        <div class="mobile" onClick={clickHandler}>
          <AiOutlineMenu size="50px" />
        </div>
        <ul className={`lists ${isMenuOpen ? "open" : ""} `}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="story">My Story</Link>
          </li>
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li>
            <Link href="thoughts">Thoughts</Link>
          </li>
          <li>
            <Link href="work">Work With Me</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
