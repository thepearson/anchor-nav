const data = [
  {
    id: "section-1",
    isAnchor: true,
    title: "Section 1",
    body: `<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac <b>turpis egestas</b>.</p><p>Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>`
  },
  {
    id: "section-2",
    isAnchor: true,
    title: "Section 2",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  },
  {
    id: "section-3",
    isAnchor: true,
    title: "Section 3",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  },
  {
    id: "section-4",
    isAnchor: true,
    title: "Section 4",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  },
  {
    id: "section-5",
    isAnchor: true,
    title: "Section 5",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  },
  {
    id: "section-6",
    isAnchor: true,
    title: "Section 6",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  },
  {
    id: "section-7",
    isAnchor: false,
    title: "Section 7",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  },
  {
    id: "section-8",
    isAnchor: true,
    title: "Section 8",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  },
  {
    id: "section-9",
    isAnchor: true,
    title: "Section 9",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  },
  {
    id: "section-10",
    isAnchor: true,
    title: "Section 10",
    body: "Etiam rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Nam at tortor in tellus interdum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. In ac felis quis tortor malesuada pretium. Fusce vulputate eleifend sapien. Ut varius tincidunt libero. Vivamus consectetuer hendrerit lacus."
  }
];

export default data;