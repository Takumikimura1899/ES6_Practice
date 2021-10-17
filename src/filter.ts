let products = [
  { name: 'きゅうり', type: '野菜', quantity: 10, price: 20 },
  { name: 'バナナ', type: 'フルーツ', quantity: 15, price: 30 },
  { name: 'セロリ', type: '野菜', quantity: 4, price: 40 },
  { name: 'オレンジ', type: 'フルーツ', quantity: 7, price: 50 },
  { name: 'キャベツ', type: '野菜', quantity: 3, price: 80 },
  { name: 'さんま', type: '魚', quantity: 2, price: 200 },
];

let filteredProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'フルーツ') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

console.log(
  products.filter((product) => {
    return product.type === 'フルーツ';
  })
);

console.log(
  products.filter((product) => {
    return (
      product.type === '野菜' && product.quantity > 3 && product.price > 30
    );
  })
);

export function commentsForPost(post: any, comments: any) {
  return comments.filter((comment: any) => {
    return comment.postId === post.id;
  });
}

export function reject(array: any[], iteratorFunction: any) {
  return array.filter((hoge) => {
    return !iteratorFunction(hoge);
  });
}
