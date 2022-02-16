import {FirstView} from '../first-view';
import {Expertise} from '../expertise';
import {Works} from '../works';
import {Posts} from '../posts';

export const Main = ({worksData, postsData}: any) => {
  return (
    <main className="w-full">
      <FirstView />
      <Expertise />
      <Works
        worksData={worksData}
      />
      <Posts
        postsData={postsData}
      />
    </main>
  )
}

