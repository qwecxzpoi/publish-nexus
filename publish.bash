# 遍历当前文件夹下文件
for file in $(find .)
do
    if test -f $file
    then
        echo "当前文件${file}"
        curl -u root:123456 -X POST "http://127.0.0.1:13003/service/rest/v1/components?repository=npm-release" \
        -H "accept: application/json" \
        -H "Content-Type: multipart/form-data" \
        -F "npm.asset=@${file};type=application/x-compressed"
    fi
    if test -d $file
    then
        echo $file 是目录
    fi
done
echo 结束
