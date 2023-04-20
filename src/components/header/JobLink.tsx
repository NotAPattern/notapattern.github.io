import styles from "./JobLink.module.sass";
import { Component } from "solid-js";

export type JobLinkProps = {
  children: string;
  href?: string;
};

const JobLink: Component<JobLinkProps> = (props) => {
  return (
    <a class={styles.JobLink} href={props.href} target="_blank">
      {props.children}
    </a>
  );
};

export default JobLink;
