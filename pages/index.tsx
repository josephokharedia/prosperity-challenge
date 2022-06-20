import { useEffect, useState } from "react";
import styled from "styled-components";

// Wraps around everything
const Container = styled.div`
  > * {
    display: block;
  }
`;

// Grouping buttons
const BtnGrp = styled.span`
  overflow: auto;
  display: block;
  > * {
    float: left;
  }
`;

const MinusButton = styled.div`
  border: none;
  border-radius: 14px;
  height: 30px;
  min-width: 30px;
  padding: 0 10px;
  text-align: center;
  background: orange;
  color: gray;
  margin: 10px 10px 10px 0;
  font-weight: bold;
`;

const ButtonPlus = styled.div`
  border: none;
  border-radius: 15px;
  height: 30px;
  padding: 0 10px;
  min-width: 30px;
  text-align: center;
  background: lime;
  color: gray;
  margin: 10px 10px 10px 0;
  font-weight: bold;
`;

const Count = styled.p`
  font-size: 36px;
  font-family: monospace;
`;

export default function Main() {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    const response = await fetch("/api/count");
    const result = await response.json();
    return result.count;
  };
  const saveCount = async (count: number) => {
    await fetch("/api/count", {
      method: "POST",
      body: JSON.stringify({
        count,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const changeCount = async (count: number) => {
    await saveCount(count);
    const newCount = await fetchCount();
    setCount(newCount);
  };

  useEffect(() => {
    fetchCount().then((count) => {
      setCount(count);
    });
  });

  return (
    <Container>
      <span style={{ fontSize: 50 }}>Count</span>
      <Count>{count}</Count>
      <BtnGrp>
        <MinusButton onClick={() => changeCount(count + 1)}>➕</MinusButton>
        <MinusButton onClick={() => changeCount(count + 5)}>➕ 5</MinusButton>
        <MinusButton onClick={() => changeCount(count + 10)}>➕ 10</MinusButton>
      </BtnGrp>
      <BtnGrp>
        <ButtonPlus onClick={() => changeCount(count - 1)}>➖</ButtonPlus>
        <ButtonPlus onClick={() => changeCount(count - 5)}>➖ 5</ButtonPlus>
        <ButtonPlus onClick={() => changeCount(count - 10)}>➖ 10</ButtonPlus>
      </BtnGrp>
    </Container>
  );
}
