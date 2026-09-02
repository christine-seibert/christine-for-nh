image := "christine-for-nh:latest"

[private]
default: build serve

build:
  nerdctl build -t {{image}} .

serve:
  nerdctl run --rm -it -p 8000:8000 -v ${PWD}:/docs {{image}}

serve-detached:
  nerdctl run -d -p 8000:8000 -v ${PWD}:/docs {{image}}

start: build serve-detached

stop:
  nerdctl container stop $(nerdctl ps -a -q --filter ancestor={{image}})

clean: stop
  nerdctl rm $(nerdctl ps -a -q --filter ancestor={{image}})
  nerdctl rmi {{image}}
