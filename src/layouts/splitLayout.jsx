
import { SplitScreen } from "../components/split-screens";
import { RegularList } from "../components/lists/regularList";
import  { authors }  from "../data/authors";
import  { books }  from "../data/books";

import { SmallAuthors } from "../components/authors/smallAuthors";
import { BigAuthors } from "../components/authors/bigAuthors";

import { SmallBookListItem } from "../components/books/smallAuthors";
import { LargeListItemBooks } from "../components/books/bigAuthors";
import { GetCurrentuserDetails } from "../components/info/getCurrentUserInfo";
import { UserInfo } from "../components/info/user-info";
import { UserLoader } from "../components/info/UserLoader";

const LeftContainer = ({content}) => {
    return (
         <h2 style={{backgroundColor: 'red'}}> {content}</h2>
    );
}

const RightContainer = ({content}) => {
    return (
         <h2 style={{backgroundColor: 'blue'}}> {content} </h2>
    );
}

export const WholeLayout = () => {
    return (
        <>
        {/* <RegularList items={authors} sourceName={'author'} ItemComponent={SmallAuthors} />
        <RegularList items={authors} sourceName={'author'} ItemComponent={BigAuthors} /> */}
        {/* <GetCurrentuserDetails> 
            <UserInfo />
        </GetCurrentuserDetails> */}

        <UserLoader userId={3}>
             <UserInfo />
        </UserLoader>
        {/* <RegularList items={books} sourceName={'book'} ItemComponent={SmallBookListItem} />
        <RegularList items={books} sourceName={'book'} ItemComponent={LargeListItemBooks} /> */}
        <SplitScreen  Left={LeftContainer} Right={RightContainer} leftWidth={2} rightWidth={4}>
            <LeftContainer content={' I am Left'} />
            <RightContainer content={' I am Right'}/>
        </SplitScreen>
        </>
    );
}