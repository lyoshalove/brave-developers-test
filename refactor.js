const func = (s, a, b) =>
  s ? Math.max(s.lastIndexOf(a), s.lastIndexOf(b)) : -1;
