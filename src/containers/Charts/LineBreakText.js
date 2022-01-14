import React, { useMemo } from 'react';

function backwardAutoLineBreak(str, maxLength, fillFront) {
  if (!maxLength) return [str]
  const strArr = Array.from(str)
  if (!fillFront) strArr.reverse()
  let i = 0
  const lines = strArr.reduce((lines, st) => {
    lines[i] = lines[i] || ''
    if (lines[i].length == maxLength) {
      i += 1
      lines[i] = ''
    }
    if (fillFront) {
      lines[i] += st
    } else {
      lines[i] = st + lines[i]
    }
    return lines
  }, [])
  if (!fillFront) {
    lines.reverse()
  }
  if (fillFront) {
    const { length } = lines
    if (lines[length - 1].length === 1) {
      lines[length - 1] = lines[length - 2].substr(lines[length - 2].length - 1) + lines[length - 1]
      lines[length - 2] = lines[length - 2].substr(0, lines[length - 2].length - 1)
    }
  } else {
    if (lines[0].length === 1) {
      lines[0] += lines[1][0]
      lines[1] = lines[1].substr(1)
    }
  }
  return lines
}

const LineBreakText = ({
  x,
  y,
  dy,
  maxLength,
  lineHeight,
  lineBefore,
  fillFront,
  verticalCenter,
  maxLines,
  text,
  textAnchor,
  style,
}) => {
  const lines = useMemo(() => {
    let perLine = maxLength
    let estLines = backwardAutoLineBreak(text, perLine, fillFront)
    let estLineCount = estLines.length
    while (estLineCount > maxLines) {
      perLine += 1
      estLines = backwardAutoLineBreak(text, perLine, fillFront)
      estLineCount = estLines.length
    }
    return estLines
  }, [maxLength, text, fillFront, maxLines])
  const lineCount = lines.length
  const yPos = lines.map((c, i) => y + (verticalCenter && lineCount > 1 ? (0.5 * style.fontSize * (lineBefore ? 1 : -1)) : 0) + lineHeight * style.fontSize * (lineBefore ? i - lineCount + 1 : i));
  const texts = lines.map((c, i) => (
    <text
      key={i}
      x={x}
      y={yPos[i]}
      dy={dy}
      textAnchor={textAnchor}
      style={style}
    >
      {c}
    </text>
  ))
  return <g>{texts}</g>;
};

LineBreakText.defaultProps = {
  lineHeight: 1.3,
  // verticalCenter: true,
  maxLines: 3,
}

export default LineBreakText;
