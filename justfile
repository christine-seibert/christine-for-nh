image := "christine-for-nh:latest"

# use PowerShell Core instead of sh on Windows:
set windows-shell := ["pwsh", "-c"]

# Default to list System Info and Commands
[private]
default: build serve

build:
  docker build -t {{image}} .

serve:
  docker run --rm -it -p 8000:8000 -v ${PWD}:/docs {{image}}

serve-detached:
  docker run -d -p 8000:8000 -v ${PWD}:/docs {{image}}

start: build serve-detached

stop:
  docker container stop $(docker ps -a -q --filter ancestor={{image}})

clean: stop
  docker rm $(docker ps -a -q --filter ancestor={{image}})
  docker rmi {{image}}

