import styles from '../styles/Home.module.css'
import WorkCard from '@/components/WorkCard'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { workList } from '../data/worksList'

export default function Works() {
  const router = useRouter();
  const { type } = router.query;
  const [selectedTag, setSelectedTag] = useState("All");

  const filterTags = [
  { label: "All", slug: "all" },
  { label: "Graphic Design", slug: "graphic-design" },
  { label: "UX/UI Design", slug: "ux-ui" },
  { label: "Motion Graphic Design", slug: "motion" },
  ];

  useEffect(() => {
    if (!type || type === 'all') {
      setSelectedTag("All");
    } else {
      const matchedTag = filterTags.find(tag => tag.slug === type);
      if (matchedTag) {
        setSelectedTag(matchedTag.label)
      }
    }
  }, [type])

const handleTagClick = (tag) => {
  setSelectedTag(tag.label);
  router.push(
    {
      pathname: '/',
      query: tag.slug === 'all' ? {} : { type: tag.slug },
    },
    undefined,
    { shallow: true }
  )
}

  const filteredWorks = selectedTag === "All"
  ? workList
  : workList.filter(work => work.category.includes(selectedTag));



  return (
    <div className={styles.outerContainer}>
      <Head>
        <title>Madoka Nogaki: A graphic & web designer based in Vancouver/Victoria</title>
      </Head>

      {/* Filter */}
      <div className={styles.filter}>
        {filterTags.map((tag, index) => (
          <div
            key={index}
            onClick={() => handleTagClick(tag)}
            className={
              selectedTag === tag.label
                ? styles.filterOn
                : styles.filterOff
            }
      >
      <h4>{tag.label}</h4>
    </div>
  ))}
</div>

      {/* Work Cards */}
      <div className={styles.worksContainer}>
        {
          filteredWorks.map( work => (
            <WorkCard 
              title={work.title} image={work.image}  href={work.href}
            tags={work.tags} targetBlank={work.targetBlank} summary={work.summary} />
          ))
        }
      </div>
    </div>
  )
}
