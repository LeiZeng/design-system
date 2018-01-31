```
[
  <Input key="default" placeholder="Try something..." />,
  <Input resize key="resize" placeholder="Try something..." />,
  <Input key="textarea" type="textarea" height={100} placeholder="Try something..." />,
  <Input withAfter={<Icon icon="clock" />} defaultValue="mysite" />,
  <Input withBefore={'Email:'} withAfter="Ahh" defaultValue="mysite" />,
  <Input withAfter={'Search'} defaultValue="mysite" />,
]
```

```
[
  <Input key="select" type="select" options={{a: 'Option One', b: 'Option Two'}}/>,
  <Input key="checkbox" type="checkbox" />,
  <Input key="radio" type="radio" />,
]
```