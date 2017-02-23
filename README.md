Dockerコンテナ上でAPI Blueprintで書かれたドキュメントをaglioで変換してプレビューする

# 使い方
## git clone
```
git clone https://github.com/sktbrt/api-blueprint-preview.git
```
## docker build
```
docker build -t blueprint-preview .
```
## docker run
```
docker run -it -p 8000:8000 --rm blueprint-preview
```
or
```
docker run -it -v api-docs-path:/workspace/docs -p 8000:8000 --rm blueprint-preview
```

## Preview
http://[ip-or-host]:8000/[file-name.html]
![Preview](https://raw.githubusercontent.com/sktbrt/files/master/api-blueprint-preview.PNG)

## customize
Edit:aglioconfig.json

## 参照
+ https://apiblueprint.org/
+ https://github.com/danielgtaylor/aglio
+ https://www.npmjs.com/package/gulp-aglio
