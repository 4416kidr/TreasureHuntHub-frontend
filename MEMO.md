# MEMO
# 環境構築
1. `npx create-next-app@latest`
   1. [Installation (nextjs.org)](https://nextjs.org/docs/getting-started/installation)
2. `cd treasure-hunt-hub`
3. `volta pin node@latest` & `volta pin yarn@latest`
4. modify `.gitignore`
   1. [Which files should be gitignored? (yarnpkg.com)](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)
      1. using Zero-Installs
5. `yarn install`
## yarnのZero-Installsについて
- 参考サイト:  [Cache strategies (yarnpkg.com)](https://yarnpkg.com/features/caching)
### Offline mirror
- npmレジストリを手元にキャッシュとして置いておく
  - npmレジストリが壊れていても問題ない
- キャッシュをgitに追加することで、どのマシンでも同一のnpmレジストリを利用することができる
### Zero-installs
- キャッシュをgitに追加しているので、ブランチを変えても`yarn install`しなくても良い
- この機能を利用するにはキャッシュをgitに追加する必要がある
  - デフォルトでキャッシュは`.yarn/cache`にある
  - 実際には`.yarn/cache`と`.pnp.*`をgitに追加する
- プロジェクトに`yarn`を導入するときの`.gitignore`の書き方は[Which files should be gitignored? (yarnpkg.com)](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)を見る