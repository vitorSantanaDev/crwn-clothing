import styled, { css } from 'styled-components'
import { IViewProps } from './types'

export const CategoryContainer = styled.div`
  ${() => css`
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    min-width: 30%;
    overflow: hidden;
    align-items: center;
    margin: 0 7.5px 15px;
    justify-content: center;
    border: 1px solid black;

    &:hover {
      cursor: pointer;
      .bodyContent {
        opacity: 0.9;
      }
    }

    &.large {
      height: 380px;
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
  `}
`
export const CategoryBackground = styled.div<Partial<IViewProps>>`
  ${({ urlImageBackground }) => css`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${urlImageBackground});

    &:hover {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  `}
`
export const CategoryBody = styled.div`
  ${() => css`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
  `}
`
export const CategoryTitle = styled.h2`
  ${() => css`
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  `}
`
export const CategoryAction = styled.p`
  ${() => css`
    font-weight: lighter;
    font-size: 16px;
  `}
`
