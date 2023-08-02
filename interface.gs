main = function
    if active_user != "root" then
        shell = get_shell("root", "password")
        if typeof(shell) != "shell" then return print("server down for maintenance.")
        return shell.launch(program_path)
    end if
    interface = get_custom_object
    interface.ret = null
    shell = get_shell
    computer = shell.host_computer
    rootFolder = computer.File("/")
    interfacesFolder = computer.File("/root/interfaces")
    if not interfacesFolder or not interfacesFolder.is_folder then return print("server down for maintenance.")
    if not hasIndex(interface, "args") then return print("args not found.")
    if @interface.args isa funcRef or @interface.args isa map or (not @interface.args isa list) then return print("invalid arguments.") //funcRef and map check are needed because sth can be a list and a map at the same time. aMap = new list
    for arg in interface.args
        if @arg isa funcRef then return print("invalid arguments.")
    end for
    if len(interface.args) <= 0 then return null

    secureServer = function(rootFolder, exceptionFolder)
        rootFolder.chmod("u-rwx", true)
        rootFolder.chmod("g-rwx", true)
        rootFolder.chmod("o-rwx", true)
        exceptionFolder.chmod("o+x", true)
        rootFolder.set_owner("root", true)
        rootFolder.set_group("root", true)
    end function
    secureServer(rootFolder, interfacesFolder)

    methods = {}
    methods.testConnection = function(args)
        return true
    end function
   
    method = @interface.args[0] + ""
    if not methods.hasIndex(method) then return print("method not found.")
    execute = @methods[method]
    interface.ret = execute(@interface.args[1:])
    return null
end function
main