# is-web-address

## Install

```bash
yarn add is-web-address
```

Or

```bash
npm i is-web-address
```

## List of valid and invalid web address that we have cover.

<details>
<summary>Invalid</summary>

- [x] (2ms)
- [x] example.com.
- [x] example..com (1ms)
- [x] example...com.
- [x] 192.168.1..0
- [x] https://example.com.
- [x] https://example..com
- [x] https://example...com.
  </details>

<details>
<summary>Valid</summary>

- [x] example.com
- [x] 192.168.1.1
- [x] http://192.168.1.1
- [x] http://example.com
- [x] http://example.com/
- [x] http://example.com:8080
- [x] http://example.com/hello-world (1ms)
- [x] example.com/search?q=hello+world
- [x] http://example.com/very-long/path/and?it=should&be=works&too=true
- [x] http://192.168.1.1/very-long/path/and?it=should&be=works&too=true

</details>
