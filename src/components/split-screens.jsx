import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Panel = styled.div`
    flex: ${p => p.flex};
`;


export const SplitScreen = ({children, leftWidth, rightWidth}) => {
    const [left, right] = children;
    return (
        <Container >
            <Panel flex={leftWidth}>
                {/* <Left content={' I am Left'} /> */}
                {left}
            </Panel>

            <Panel flex={rightWidth}>
                {right}
                {/* <Right content={' I am Right'} /> */}
            </Panel>
        </Container>
    );
}