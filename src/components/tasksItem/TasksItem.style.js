import styled from "styled-components";

export const ItemContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const TaskEditButton = styled.a`
  margin-left: 5px;
  margin-top: -1px;
  flex-grow: 1;
`;

export const TaskText = styled.p`
  color: ${(props) => (props.done === "true" ? "#eee" : "#fff")};
  text-decoration-line: ${(props) =>
    props.done === "true" ? "line-through" : "none"};
  font-size: 14px;
`;

export const RemoveText = styled.p`
  color: #d32f2f;
  font-weight: 700;
`;
