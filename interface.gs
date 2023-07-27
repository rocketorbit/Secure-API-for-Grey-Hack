interface = get_custom_object
interface.ret = null
shell = get_shell("root", "password")
if typeof(shell) != "shell" then exit("server down for maintenance.")
if indexOf(interface, "args") == null then exit("args not found.")
if @interface.args isa funcRef or @interface.args isa map or (not interface.args isa list) then exit("invalid arguments.") //funcRef and map check are needed because sth can be a list and a map at the same time. aMap = new list
for arg in interface.args
    if @arg isa funcRef then exit("invalid arguments.")
end for
if len(interface.args) <= 0 then exit

if @interface.args[0] == "testConnection" then //demo method.
    interface.ret = true
    exit
end if

exit