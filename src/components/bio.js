/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import Image from "gatsby-image";
import Logosvg from "../../content/assets/martinyinstudio.svg"
import { rhythm } from "../utils/typography";
import Style from './style/bio.module.scss'
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-picture.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            bilibili
            youtube
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      {/* <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /> */}

      <Logosvg
        className={Style.logo}
      />
      <div>
        文章由 {author.name} 创作
        <p>{author.summary}</p>
        {` `}
        在
        &nbsp;
        <a target='_blank' rel='noreferrer' href={`${social.bilibili}`}>bilibili</a>
        &nbsp;
        <a target='_blank' rel='noreferrer' href={`${social.youtube}`}>YouTube</a>
        &nbsp;
        找到我
      </div>
    </div>
  );
};

export default Bio;
